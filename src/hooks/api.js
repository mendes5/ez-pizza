import {
  GET_PIZZA_OPTIONS,
  GET_PIZZA_RECOMMENDATION,
  GET_USER_POINT_COUNT,
} from "../constants";
import { apiGet, apiPost } from "../modules/API";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { useErrorNotification } from "./notifications";

export const usePizzaOptions = () => {
  const [openErrorNotification] = useErrorNotification();

  return useQuery(GET_PIZZA_OPTIONS, () => apiGet("/pizza/options"), {
    onError: () => {
      openErrorNotification(
        "Falha ao carregar as opções, se isso continuar acontecendo: let us know..."
      );
    },
  });
};

export const usePizzaRecommendation = () => {
  const [openErrorNotification] = useErrorNotification();

  return useQuery(
    GET_PIZZA_RECOMMENDATION,
    () => apiGet("/pizza/recommendation"),
    {
      onError: () => {
        openErrorNotification(
          "Falha ao carregar a recomendação, se isso continuar acontecendo: let us know..."
        );
      },
    }
  );
};

export const useUserPointCount = () => {
  const [openErrorNotification] = useErrorNotification();

  return useQuery(GET_USER_POINT_COUNT, () => apiGet("/user/point-count"), {
    keepPreviousData: true,
    onError: () => {
      openErrorNotification(
        "Falha ao carregar seus pontos, se isso continuar acontecendo: let us know..."
      );
    },
  });
};

export const usePizzaSubmit = () => {
  const [openErrorNotification] = useErrorNotification();
  const queryClient = useQueryClient();

  return useMutation((data) => apiPost("/pizza", data), {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_PIZZA_RECOMMENDATION);

      setTimeout(() => {
        queryClient.invalidateQueries(GET_USER_POINT_COUNT);
      }, 500);
    },
    onError: () => {
      openErrorNotification(
        "Falha ao enviar os dados, se isso continuar acontecendo: let us know..."
      );
    },
  });
};
