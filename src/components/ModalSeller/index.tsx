import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { SellerForm } from "../../pages/Seller/Form";
import { ISeller } from "../../interfaces/seller";

interface ModalSellerProps {
  open: boolean;
  handleClose: () => void;
  initialValues?: Partial<ISeller>;
  isEdit?: boolean;
  onSubmit: (values: Partial<ISeller>) => void;
}

export default function ModalSeller({
  open,
  handleClose,
  initialValues,
  isEdit = false,
  onSubmit,
}: ModalSellerProps) {
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: "center" }}>
        {isEdit ? "Editar Vendedor" : "Adicionar Vendedor"}
      </DialogTitle>
      <DialogContent>
        <SellerForm
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
