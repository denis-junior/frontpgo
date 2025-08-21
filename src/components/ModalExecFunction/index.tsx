import { Box, CircularProgress, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { IFunction } from "../../interfaces/function";
import { ExecFunctionForm } from "../../pages/Functions/Form/execFunction";
import { IClient } from "../../interfaces/client";
import { useGlobal } from "../../contexts/global/GlobalContext";
import { useEffect } from "react";
import Icon from "../CustomIcon";

interface ModalExecFunctionProps {
  open: boolean;
  handleClose: () => void;
  initialValues?: Partial<IFunction & { clinic?: IClient[] }>;
  isEdit?: boolean;
  onSubmit: (values: Partial<IFunction>) => void;
}

export default function ModalExecFunction({
  open,
  handleClose,
  initialValues,
  isEdit = false,
  onSubmit,
}: ModalExecFunctionProps) {
  const { fetchClients, clients, resultExecFunction, isExecFunction } =
    useGlobal();

  useEffect(() => {
    fetchClients();
  }, []);
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle style={{ textAlign: "center" }}>Executar Função</DialogTitle>
      <DialogContent>
        <ExecFunctionForm
          initialValues={initialValues || {}}
          onSubmit={(values) => {
            onSubmit(values);
            // handleClose();
          }}
          onCancel={handleClose}
          isEdit={isEdit}
          clinics={clients}
        />
        {isExecFunction ? (
          <Box sx={{ display: "flex", justifyContent: "center", paddingTop: "25px" }}>
            <CircularProgress />
          </Box>
        ) : (
          <div style={{ marginTop: "20px" }}>
            {resultExecFunction?.data?.length > 0 &&
            resultExecFunction?.success == true ? (
              Array.isArray(resultExecFunction?.data) &&
              resultExecFunction?.data?.length > 0 ? (
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                    borderRadius: "8px",
                    padding: "16px",
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#2e7d32",
                        fontSize: "20px",
                      }}
                    >
                      <Icon type="table_chart" />
                    </span>
                    <h4
                      style={{
                        margin: 0,
                        color: "#2e7d32",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Resultados da Consulta ({resultExecFunction.data.length}{" "}
                      registro
                      {resultExecFunction.data.length > 1 ? "s" : ""})
                    </h4>
                  </div>

                  <div
                    style={{
                      maxHeight: "300px",
                      overflow: "auto",
                      backgroundColor: "#ffffff",
                      borderRadius: "4px",
                      border: "1px solid #dee2e6",
                      overflowX: "auto", // Adiciona scroll horizontal
                      overflowY: "auto", // Mantém scroll vertical
                    }}
                  >
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        minWidth: "600px", // Define largura mínima para forçar scroll quando necessário
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: "#f8f9fa" }}>
                          {Object.keys(resultExecFunction.data[0]).map(
                            (key) => (
                              <th
                                key={key}
                                style={{
                                  border: "1px solid #dee2e6",
                                  padding: "12px 8px",
                                  textAlign: "left",
                                  fontWeight: "600",
                                  color: "#495057",
                                  fontSize: "14px",
                                  position: "sticky",
                                  top: 0,
                                  backgroundColor: "#f8f9fa",
                                  whiteSpace: "nowrap", // Evita quebra de linha no cabeçalho
                                  minWidth: "120px", // Largura mínima para cada coluna
                                }}
                              >
                                {key}
                              </th>
                            )
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {resultExecFunction.data.map(
                          (
                            item: { [s: string]: unknown } | ArrayLike<unknown>,
                            index: number
                          ) => (
                            <tr
                              key={index}
                              style={{
                                backgroundColor:
                                  index % 2 === 0 ? "#ffffff" : "#f8f9fa",
                              }}
                            >
                              {Object.values(item).map((value, i) => (
                                <td
                                  key={i}
                                  style={{
                                    border: "1px solid #dee2e6",
                                    padding: "8px",
                                    fontSize: "13px",
                                    color: "#495057",
                                    minWidth: "120px", // Largura mínima para cada coluna
                                    wordBreak: "break-word", // Permite quebra de palavra em textos longos
                                    whiteSpace: "normal", // Permite quebra de linha normal
                                  }}
                                  title={
                                    typeof value === "object"
                                      ? JSON.stringify(value)
                                      : String(value)
                                  } // Tooltip mantido para referência
                                >
                                  {typeof value === "object"
                                    ? JSON.stringify(value, null, 2) // Adiciona formatação ao JSON
                                    : String(value)}
                                </td>
                              ))}
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid #e9ecef",
                    borderRadius: "8px",
                    padding: "16px",
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "#6c757d",
                        fontSize: "20px",
                      }}
                    >
                      <Icon type="code" />
                    </span>
                    <h4
                      style={{
                        margin: 0,
                        color: "#6c757d",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Dados Retornados (JSON)
                    </h4>
                  </div>

                  <pre
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "12px",
                      borderRadius: "4px",
                      maxHeight: "300px",
                      overflow: "auto",
                      fontSize: "12px",
                      border: "1px solid #dee2e6",
                      margin: 0,
                      fontFamily: "Monaco, Consolas, 'Courier New', monospace",
                    }}
                  >
                    {JSON.stringify(resultExecFunction.data, null, 2)}
                  </pre>
                </div>
              )
            ) : resultExecFunction?.success == true &&
              resultExecFunction?.data.length === 0 ? (
              <div
                style={{
                  backgroundColor: "#e8f5e8",
                  border: "1px solid #4caf50",
                  borderRadius: "8px",
                  padding: "16px",
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    style={{
                      color: "#2e7d32",
                      fontSize: "24px",
                    }}
                  >
                    <Icon type="check_circle" />
                  </span>
                  <h4
                    style={{
                      margin: 0,
                      color: "#2e7d32",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Operação Executada com Sucesso
                  </h4>
                </div>

                <div
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "12px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    color: "#424242",
                    border: "1px solid #c8e6c9",
                    width: "100%",
                  }}
                >
                  <Icon
                    type="info"
                    style={{
                      fontSize: "16px",
                      color: "#757575",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />
                  A consulta foi processada corretamente, mas não retornou
                  nenhum resultado.
                </div>
              </div>
            ) : resultExecFunction === null ? (
              <></>
            ) : (
              <div
                style={{
                  backgroundColor: "#ffebee",
                  border: "1px solid #f44336",
                  borderRadius: "8px",
                  padding: "16px",
                  marginTop: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    style={{
                      color: "#d32f2f",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    <Icon type="report_problem" />
                  </span>
                  <h4
                    style={{
                      margin: 0,
                      color: "#d32f2f",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Erro na Execução
                  </h4>
                </div>

                {resultExecFunction?.error && (
                  <div
                    style={{
                      backgroundColor: "#ffcdd2",
                      padding: "12px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      color: "#b71c1c",
                      fontFamily: "monospace",
                      wordBreak: "break-word",
                    }}
                  >
                    <strong>Erro:</strong> {resultExecFunction?.error}
                  </div>
                )}

                {resultExecFunction?.message && (
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      padding: "12px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      color: "#424242",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <strong>Detalhes:</strong> {resultExecFunction?.message}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
