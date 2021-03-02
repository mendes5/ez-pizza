import styled from "styled-components";
import { useMemo } from "react";

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

export const CurrencyValue = ({ value }) => {
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
