import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../utils/constants";
import { postCheckout } from "../api/checkout";

type SuccessfullRequest = {
  purchaseId: number;
  success: boolean;
};

export const useFormSubmit = () => {
  const navigate = useNavigate();

  const onSuccess = ({ purchaseId, success }: SuccessfullRequest) => {
    const searchParams = new URLSearchParams();
    searchParams.append("success", success.toString());
    searchParams.append("id", purchaseId.toString());

    navigate({ pathname: ROUTES.success, search: searchParams.toString() });
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
