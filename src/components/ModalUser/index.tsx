import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { IUser } from "../../interfaces/user";
import { UserForm } from "../../pages/User/Form";

interface ModalUserProps {
  open: boolean;
  handleClose: () => void;
  initialValues?: Partial<IUser>;
  isEdit?: boolean;
  onSubmit: (values: Partial<IUser>) => void;
}

export default function ModalUser({
  open,
  handleClose,
  initialValues,
  isEdit = false,
  onSubmit,
}: ModalUserProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: "center" }}>
        {isEdit ? "Editar Usuário" : "Adicionar Usuário"}
      </DialogTitle>
      <DialogContent>
        <UserForm
          initialValues={initialValues || {}}
          onSubmit={(values) => {
            onSubmit(values);
            handleClose();
          }}
          onCancel={handleClose}
          isEdit={isEdit}
        />
      </DialogContent>
    </Dialog>
  );
}
