import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FunctionForm } from "../../pages/Functions/Form";
import { IFunction } from "../../interfaces/function";

interface ModalFunctionProps {
  open: boolean;
  handleClose: () => void;
  initialValues?: Partial<IFunction>;
  isEdit?: boolean;
  onSubmit: (values: Partial<IFunction>) => void;
}

export default function ModalFunction({
  open,
  handleClose,
  initialValues,
  isEdit = false,
  onSubmit,
}: ModalFunctionProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: "center" }}>
        {isEdit ? "Editar Função" : "Adicionar Função"}
      </DialogTitle>
      <DialogContent>
        <FunctionForm
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
