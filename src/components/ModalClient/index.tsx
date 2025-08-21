import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { IClient } from "../../interfaces/client";
import { ClientForm } from "../../pages/Client/Form";
import { ISeller } from "../../interfaces/seller";

interface ModalClientProps {
  open: boolean;
  handleClose: () => void;
  initialValues?: Partial<IClient>;
  isEdit?: boolean;
  onSubmit: (values: Partial<IClient>) => void;
  sellers: ISeller[];
}

export default function ModalClient({
  open,
  handleClose,
  initialValues,
  isEdit = false,
  onSubmit,
  sellers = [],
}: ModalClientProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{isEdit ? "Editar Cliente" : "Adicionar Cliente"}</DialogTitle>
      <DialogContent>
        <ClientForm
          initialValues={initialValues || {}}
          onSubmit={(values) => {
            onSubmit(values);
            handleClose();
          }}
          onCancel={handleClose}
          isEdit={isEdit}
          sellers={sellers}
        />
      </DialogContent>
    </Dialog>
  );
}
