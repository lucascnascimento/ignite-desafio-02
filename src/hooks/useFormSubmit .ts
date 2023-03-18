import { useMutation } from "@tanstack/react-query";
import { createSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../utils/constants";
import { postCheckout } from "../api/checkout";
import { CheckoutPayload } from "../@types/types";

type SuccessfullRequest = {
  purchaseId: number;
  success: boolean;
  payload: CheckoutPayload;
};

export const useFormSubmit = () => {
  const navigate = useNavigate();

  const onSuccess = ({ purchaseId, success, payload }: SuccessfullRequest) => {
    const params = { success: success.toString(), id: purchaseId.toString() };

    navigate(
      {
        pathname: ROUTES.success,
        search: `?${createSearchParams(params)}`,
      },
      { state: payload }
    );
  };

  const onError = () => {
    toast.error("Algo inesperado aconteceu, tente novamente!");
  };

  const { mutate, isLoading } = useMutation(postCheckout, {
    onError,
    onSuccess,
  });

  return { isLoading, postForm: mutate };
};
