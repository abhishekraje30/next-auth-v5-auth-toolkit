"use client";

import { LOGIN_ROUTE } from "@/lib/constants";
import CardWrapper from "./card-wrapper";
import { PropagateLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "../../../actions/new-verification";
import { set } from "zod";
import { FormSuccess } from "../form-success";
import { FormError } from "../form-error";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(async () => {
    if (success || error) return;
    if (!token) {
      setError("Missing token");
      return;
    }

    try {
      const data = await newVerification(token);
      setSuccess(data.success);
      setError(data.error);
    } catch (e: any) {
      setError("Something went wrong");
    }
    newVerification(token);
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel={"Confirm your email address"}
      backButtonLabel={"Back to login"}
      backButtonHref={LOGIN_ROUTE}
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <PropagateLoader color={"#36d7b7"} />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
