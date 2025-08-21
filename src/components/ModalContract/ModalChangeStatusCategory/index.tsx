import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { FormStatus } from "../../../pages/Contract/Form/FormStatus";
import { IStatusCategory } from "../../../interfaces/contract";

interface ModalStatusCategoryProps {
  open: boolean;
  handleClose: () => void;
  initialValues?: IStatusCategory;
  onSubmit: (values: IStatusCategory) => void;
}

export default function ModalChangeStatusCategory({
  open,
  handleClose,
  initialValues,
  onSubmit,
}: ModalStatusCategoryProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ textAlign: "center" }}>Editar Situação</DialogTitle>
      <DialogContent>
        <FormStatus
          initialValues={initialValues || { id: 0, status: "", categoria: "" }}
          onSubmit={(values) => {
            onSubmit(values);
            handleClose();
          }}
          onCancel={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
}
