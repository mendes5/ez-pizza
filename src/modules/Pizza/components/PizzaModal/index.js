import { Checkbox, Input, Radio } from "../../../Form";
import { Form, Formik, useFormikContext } from "formik";
import { ModalBody, ModalContainer, ModalFooter, ModalHeader } from "./styles";
import {
  useErrorNotification,
  useSuccessNotification,
} from "../../../../hooks/notifications";
import { useMemo, useState } from "react";
import {
  usePizzaOptions,
  usePizzaRecommendation,
  usePizzaSubmit,
} from "../../../../hooks/api";

import CheckboxCheck from "../../../../images/checkbox.svg";
import CheckboxUncheck from "../../../../images/checkbox-uncheck.svg";
import ModalRoot from "../ModalRoot";
import RadioCheck from "../../../../images/radio.svg";
import RadioUncheck from "../../../../images/radio-uncheck.svg";
import styled from "styled-components";

const Button = styled.button`
  appearance: none;
  border: none;
  background-color: #fff;
  border: 2px solid #cdcdcd;
  border-radius: 4px;
  padding: 8px 15px;
  margin: 0 4px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
  font-size: 14px;
  color: #383838;

  :disabled {
    opacity: 0.5;
  }
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;

  &:first-child {
    justify-self: start;
  }

  &:last-child {
    justify-self: end;
  }
`;


const CommentsInput = styled(Input)`
  display: block;
  margin-top: 10px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #b2b2b2;
  display: block;
  color: #525252;
  padding: 4px 9px;
`;

const OptionGroup = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 14px;
  justify-content: start;
`;

const CurrencyPill = styled.div`
  background-color: #f2f2f2;
  font-size: 14px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0 6px;
  margin-left: auto;
`;

const CurrencyValue = ({ value }) => {
  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: value.currency,
      }),
    [value.currency]
  );

  return <CurrencyPill>{formatter.format(value.value)}</CurrencyPill>;
};

const OptionCard = styled.label`
  border-radius: 6px;
  border: 1px solid #b2b2b2;
  cursor: pointer;
  min-width: 500px;
  min-height: 40px;
  padding: 8px;
  display: grid;
  grid-template-columns: 14px 1fr;
  justify-content: start;
  gap: 16px;
  align-items: center;
  color: #525252;
  font-weight: 500;

  transition: background-color 200ms;

  :hover {
    background-color: #f2f2f2;
  }
`;

const Page = styled.div`
  width: 100%;
  min-height: 456px;
  flex-shrink: 0;
`;

const RadioIcon = styled.div`
  background-image: url("${RadioUncheck}");
  filter: saturate(0) brightness(2);
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background-position: center;
`;

const CheckboxIcon = styled.div`
  background-image: url("${CheckboxUncheck}");
  filter: saturate(0) brightness(2);
  width: 14px;
  height: 14px;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledRadio = styled(Radio)`
  display: none;

  &:checked + ${OptionCard} {
    border: 1px solid red;
    background-color: #fff3e9;
  }

  &:checked + ${OptionCard} ${RadioIcon} {
    background-image: url("${RadioCheck}");
    filter: none;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  display: none;

  &:checked + ${OptionCard} {
    border: 1px solid red;
    background-color: #fff3e9;
  }

  &:checked + ${OptionCard} ${CheckboxIcon} {
    background-image: url("${CheckboxCheck}");
    filter: none;
  }
`;

const FieldGroupTitle = styled.span`
  font-size: 26px;
  color: #383838;
`;

const FieldGroupDescription = styled.span`
  font-size: 26px;
  color: #383838;
  font-size: 15px;
`;

const RadioOption = ({ id, value, name, children }) => (
  <>
    <StyledRadio id={id} name={name} value={value} />
    <OptionCard htmlFor={id}>
      <RadioIcon />
      {children}
    </OptionCard>
  </>
);

const Value = styled.span`
  font-size: 14px;
  color: #5d5d5d;
  font-weight: 300;
  font-style: italic;
`;

const CheckboxOption = ({ id, name, value, children }) => (
  <>
    <StyledCheckbox id={id} name={name} value={value} />
    <OptionCard htmlFor={id}>
      <CheckboxIcon />
      {children}
    </OptionCard>
  </>
);

const FillingOption = styled.div`
  display: flex;
  align-items: center;
`;

const FieldGroup = styled.div`
  margin: 36px 0;
`;

const FillingInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
`;


const isFormInvalid = (values, sawConfirmation) => {
  const jasBorder = Boolean(values.border?.trim());
  const jasFlavour = Boolean(values.flavour?.trim());
  const jasSize = Boolean(values.size?.trim());

  return !(jasBorder && jasFlavour && jasSize && sawConfirmation);
};

const FillingDescription = styled.div`
  font-size: 12px;
  font-style: italic;
  max-width: 380px;
  font-weight: 400;
  color: #595959;
  margin-top: 9px;
`;

const FieldGroupHeader = styled.div`
  display: grid;
  margin-bottom: 16px;
`;

const BorderOption = styled.div`
  display: flex;
`;

const ExtraOption = styled.div`
  display: flex;
`;

const SizeOption = styled.div`
  display: flex;
`;

const PizzaForm = ({ options, page }) => {
  const context = useFormikContext();

  const getNameFromId = (id, candidates) => {
    if (!Array.isArray(candidates)) return null;

    let result;

    if (Array.isArray(id)) {
      result = candidates.filter((x) => id.includes(x.id));
    } else {
      result = candidates.find((x) => x.id === id);
    }

    if (Array.isArray(result)) {
      return result.filter(Boolean).map((item) => item.name);
    } else {
      return result?.name;
    }
  };

  return (
    <>
      {page === 0 && (
        <Page>
          <FieldGroup>
            <FieldGroupHeader>
              <FieldGroupTitle>Borda</FieldGroupTitle>
              <FieldGroupDescription>
                Time to choose Mr freeman...
              </FieldGroupDescription>
            </FieldGroupHeader>
            <OptionGroup>
              {options.borders.map(({ id, name, cost }) => (
                <RadioOption key={id} id={id} value={id} name="border">
                  <BorderOption>
                    {name}
                    <CurrencyValue value={cost} />
                  </BorderOption>
                </RadioOption>
              ))}
            </OptionGroup>
          </FieldGroup>

          <FieldGroup>
            <FieldGroupHeader>
              <FieldGroupTitle>Tamanho</FieldGroupTitle>
              <FieldGroupDescription>
                Time to choose Mr freeman...
              </FieldGroupDescription>
            </FieldGroupHeader>
            <OptionGroup>
              {options.sizes.map(({ id, name, cost }) => (
                <RadioOption key={id} id={id} value={id} name="size">
                  <SizeOption>
                    {name}
                    <CurrencyValue value={cost} />
                  </SizeOption>
                </RadioOption>
              ))}
            </OptionGroup>
          </FieldGroup>
        </Page>
      )}

      {page === 1 && (
        <Page>
          <FieldGroup>
            <FieldGroupHeader>
              <FieldGroupTitle>Recheio</FieldGroupTitle>
              <FieldGroupDescription>
                Time to choose Mr freeman...
              </FieldGroupDescription>
            </FieldGroupHeader>
            <OptionGroup>
              {options.flavours.map(({ id, name, description, cost }) => (
                <RadioOption key={id} id={id} name="flavour" value={id}>
                  <FillingOption>
                    <FillingInfo>
                      <div>{name}</div>
                      <FillingDescription>{description}</FillingDescription>
                    </FillingInfo>
                    <CurrencyValue value={cost} />
                  </FillingOption>
                </RadioOption>
              ))}
            </OptionGroup>
          </FieldGroup>
          <FieldGroup>
            <FieldGroupHeader>
              <FieldGroupTitle>Extras</FieldGroupTitle>
              <FieldGroupDescription>
                Time to choose Mr freeman...
              </FieldGroupDescription>
            </FieldGroupHeader>
            <OptionGroup>
              {options.extras.map(({ id, name, cost }) => (
                <CheckboxOption key={id} id={id} name="extra" value={id}>
                  <ExtraOption>
                    {name}
                    <CurrencyValue value={cost} />
                  </ExtraOption>
                </CheckboxOption>
              ))}
            </OptionGroup>
          </FieldGroup>
        </Page>
      )}

      {page === 2 && (
        <Page>
          <FieldGroup>
            <FieldGroupHeader>
              <FieldGroupTitle>Confirmação</FieldGroupTitle>
              <FieldGroupDescription>
                Por favor verifique se os dados estão corretos:
              </FieldGroupDescription>
            </FieldGroupHeader>

            <ul>
              <li>
                Borda:{"  "}
                <Value>
                  {getNameFromId(context.values.border, options.borders)}
                </Value>
              </li>
              <li>
                Tamanho:{"  "}
                <Value>
                  {getNameFromId(context.values.size, options.sizes)}
                </Value>
              </li>
              <li>
                Recheio:{"  "}
                <Value>
                  {getNameFromId(context.values.flavour, options.flavours)}
                </Value>
              </li>
              <li>
                Extras:{"  "}
                <ul>
                  {getNameFromId(context.values.extra, options.extras).map(
                    (name) => (
                      <Value key={name}>
                        <li key={name}>{name}</li>
                      </Value>
                    )
                  )}
                </ul>
              </li>
            </ul>

            <span>Alguma observação para o entregador?</span>
            <CommentsInput name="comments" />
          </FieldGroup>
        </Page>
      )}
    </>
  );
};

const PizzaModal = ({ isOpen, onCloseClick }) => {
  const { data: options } = usePizzaOptions();
  const submitPizza = usePizzaSubmit();

  const [openErrorNotification] = useErrorNotification();
  const [openSuccessNotification] = useSuccessNotification();

  const { isLoading, data: recommendation } = usePizzaRecommendation();
  const [page, setPage] = useState(0);
  const [sawConfirmation, setSawConfirmation] = useState(false);

  const resetModal = () => {
    setPage(0);
    setSawConfirmation(false);
    onCloseClick();
  };

  if (!isOpen) return null;

  return (
    <ModalRoot onClick={resetModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Formik
          onSubmit={(values) => {
            submitPizza
              .mutateAsync(values)
              .then(({ recommendationAccepted, pointsEarned }) => {
                resetModal();
                if (recommendationAccepted) {
                  openSuccessNotification(
                    `Dados Enviados! Você acaba de ganhar ${pointsEarned} pontos por usar a recomendação!`
                  );
                } else {
                  openSuccessNotification("Dados enviados com sucesso!");
                }
              })
              .catch(() => {
                openErrorNotification(
                  "Aldo deu errado ao enviar os dados, se isso continuar acontecendo, let us know"
                );
              });
          }}
          initialValues={{
            border: null,
            size: null,
            flavour: null,
            comments: "",
            extra: [],
          }}
        >
          {({ setValues, values, submitForm }) => (
            <>
              <ModalHeader>Monte sua Pizza</ModalHeader>
              <ModalBody>
                <Form>
                  <PizzaForm page={page} options={options} />
                </Form>
              </ModalBody>
              <ModalFooter>
                <Actions>
                  <div>
                    <Button
                      disabled={isLoading}
                      onClick={() => {
                        setSawConfirmation(true);
                        setValues({
                          ...values,
                          ...recommendation.pizza,
                        });
                      }}
                      type="button"
                    >
                      Recomendação do Dia
                    </Button>
                  </div>
                  <div>
                    <Button
                      type="button"
                      disabled={page === 0}
                      onClick={() => setPage(page - 1)}
                    >
                      Anterior
                    </Button>
                    <Button
                      type="button"
                      disabled={page === 2}
                      onClick={() => {
                        setPage(page + 1);
                        if (page + 1 === 2) {
                          setSawConfirmation(true);
                        }
                      }}
                    >
                      Próximo
                    </Button>
                  </div>
                  <div>
                    <Button
                      disabled={isFormInvalid(values, sawConfirmation)}
                      type="submit"
                      onClick={submitForm}
                    >
                      Enviar
                    </Button>
                  </div>
                </Actions>
              </ModalFooter>
            </>
          )}
        </Formik>
      </ModalContainer>
    </ModalRoot>
  );
};

export default PizzaModal;
