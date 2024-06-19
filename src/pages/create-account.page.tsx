import { FC } from "react";
import { CreateAccountForm } from "../components/createAccount/create-account.form";
import { Container } from "../components/ui/Container";
import { CreateAccountScreenProps } from "../navigation/navigation";

const CreateAccountPage: FC<CreateAccountScreenProps> = () => {
  return (
    <Container>
      <CreateAccountForm />
    </Container>
  );
};

export default CreateAccountPage;
