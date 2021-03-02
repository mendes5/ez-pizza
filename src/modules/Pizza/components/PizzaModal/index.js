import {
  Button,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalRoot,
} from "modules/UI";
import { Form, Formik } from "formik";
import {
  useErrorNotification,
  useSuccessNotification,
} from "hooks/notifications";
import {
  usePizzaOptions,
  usePizzaRecommendation,
  usePizzaSubmit,
} from "hooks/api";

import { Actions } from "./styles";
import { PizzaForm } from "../PizzaForm";
import { useState } from "react";

const isFormInvalid = (values, sawConfirmation) => {
  const jasBorder = Boolean(values.border?.trim());
  const jasFlavour = Boolean(values.flavour?.trim());
  const jasSize = Boolean(values.size?.trim());

  return !(jasBorder && jasFlavour && jasSize && sawConfirmation);
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
                        openSuccessNotification('Recomendação aplicada');
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
