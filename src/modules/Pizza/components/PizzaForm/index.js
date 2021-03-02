import {
  BorderOption,
  CommentsInput,
  ExtraOption,
  FieldGroup,
  FieldGroupDescription,
  FieldGroupHeader,
  FieldGroupTitle,
  FillingDescription,
  FillingInfo,
  FillingOption,
  OptionGroup,
  Page,
  SizeOption,
  Value,
} from "./styles";
import { CheckboxOption, RadioOption } from "modules/UI";

import { CurrencyValue } from "../CurrencyValue";
import { useFormikContext } from "formik";

export const PizzaForm = ({ options, page }) => {
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
                <i>"Só a borda deveria ser um prato por si só..."</i> -GhostRider97 2021
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
                Recheios tão perfeitos que são proibidos em 8 estados.
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
                Boa sorte...
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
            <CommentsInput placeholder="Aceitamos elogios ;)" name="comments" />
          </FieldGroup>
        </Page>
      )}
    </>
  );
};
