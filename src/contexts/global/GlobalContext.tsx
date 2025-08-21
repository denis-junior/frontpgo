import React, { createContext, useContext, useState, ReactNode } from "react";
import { IClient, IDashboardClient } from "../../interfaces/client";
import { clientService } from "../../services/clientService";
import { ISeller } from "../../interfaces/seller";
import { sellerService } from "../../services/sellerService";
import { IUser } from "../../interfaces/user";
import { userService } from "../../services/userService";
import { IStatusCategory } from "../../interfaces/contract";
import { contractService } from "../../services/contractService";
import { IFunction } from "../../interfaces/function";
import { functionService } from "../../services/functionService";

interface GlobalContextType {
  fetchClients: () => Promise<void>;
  fetchSellers: () => Promise<void>;
  fetchDashboardData: () => Promise<void>;
  clients: IClient[];
  sellers: ISeller[];
  dashboardClients: IDashboardClient[];
  handleDeleteClient: (id: number) => Promise<void>;
  handleDeleteSeller: (id: number) => Promise<void>;
  handleAddClient: (client: Partial<IClient>) => Promise<void>; // ADICIONE ESTA LINHA
  handleAddSeller: (client: Partial<ISeller>) => Promise<void>; // ADICIONE ESTA LINHA
  error: string;
  setError: (error: string) => void;
  handleEditClient: (id: number, client: Partial<IClient>) => Promise<void>;
  handleEditSeller: (id: number, client: Partial<ISeller>) => Promise<void>;
  fetchUsers: () => Promise<void>;
  users: IUser[];
  handleEditUser: (id: number, user: Partial<IUser>) => Promise<void>;
  handleDeleteUser: (id: number) => Promise<void>;
  handleAddUser: (user: Partial<IUser>) => Promise<void>;
  handleEditContractSituation: (data: IStatusCategory) => void;
  handleSignContract: (id: number) => void;
  handleAcceptProposal: (id: number) => void;
  totalDoctors: number;
  fetchFunctions: () => Promise<void>;
  functions: IFunction[];
  handleEditFunction: (id: number, functionData: Partial<IFunction>) => Promise<void>;
  handleDeleteFunction: (id: number) => Promise<void>;
  handleAddFunction: (client: Partial<IClient>) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleExecuteFunction: (data: any) => Promise<void>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resultExecFunction: any;
  isExecFunction: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setResultExecFunction: React.Dispatch<React.SetStateAction<any>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within an GlobalProvider");
  }
  return context;
};

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [sellers, setSellers] = useState<ISeller[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [dashboardClients, setDashboardClients] = useState<IDashboardClient[]>(
    []
  );
  const [totalDoctors, setTotalDoctors] = useState<number>(0);

  const [functions, setFunctions] = useState<IFunction[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [resultExecFunction, setResultExecFunction] = useState<any>(null);
  const [isExecFunction, setIsExecFunction] = useState<boolean>(false);

  const [error, setError] = useState<string>("");

  const fetchClients = async () => {
    try {
      // setLoading(true);
      const data = await clientService.getAllClients();
      setClients(data);
      // setError("");
    } catch (err) {
      // setError("Failed to fetch clients");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchSellers = async () => {
    try {
      // setLoading(true);
      const data = await sellerService.getAllSellers();
      setSellers(data);
      // setError("");
    } catch (err) {
      // setError("Failed to fetch clients");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      // setLoading(true);
      const data = await userService.getAllUsers();
      console.log("Fetched users:", data);
      setUsers(data);
      // setError("");
    } catch (err) {
      // setError("Failed to fetch clients");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const fetchFunctions = async () => {
    try {
      // setLoading(true);
      const data = await functionService.getAllFunctions();
      console.log("Fetched functions:", data);
      setFunctions(data);
      // setError("");
    } catch (err) {
      // setError("Failed to fetch clients");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleEditUser = async (id: number, user: Partial<IUser>) => {
    try {
      await userService.updateUser(id, user);
      await fetchUsers();
    } catch (err) {
      setError("Failed to edit user");
      console.error(err);
    }
  };

  const handleDeleteUser = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await userService.deleteUser(id);
        await fetchUsers();
      } catch (err) {
        setError("Failed to delete user");
        console.error(err);
      }
    }
  };

  const handleAddUser = async (user: Partial<IUser>) => {
    try {
      await userService.createUser(user); // Implemente este método no service se não existir
      await fetchUsers();
    } catch (err) {
      setError("Failed to add user");
      console.error(err);
    }
  };

  const fetchDashboardData = async () => {
    try {
      // setLoading(true);
      const data = await clientService.getDashboard();
      setDashboardClients(data.clinics);
      setTotalDoctors(data.totalDoctors);
      console.log("Dashboard data fetched:", data);
      // setError("");
    } catch (err) {
      // setError("Failed to fetch clients");
      console.error(err);
    } finally {
      // setLoading(false);
    }
  };

  const handleDeleteClient = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      try {
        await clientService.deleteClient(id);
        await fetchClients();
      } catch (err) {
        setError("Failed to delete client");
        console.error(err);
      }
    }
  };

  const handleAddClient = async (client: Partial<IClient>) => {
    try {
      await clientService.createClient(client); // Implemente este método no service se não existir
      await fetchClients();
    } catch (err) {
      setError("Failed to add client");
      console.error(err);
    }
  };

  const handleAddFunction = async (functionData: Partial<IFunction>) => {
    try {
      await functionService.createFunction(functionData); // Implemente este método no service se não existir
      await fetchFunctions();
    } catch (err) {
      setError("Failed to add function");
      console.error(err);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleExecuteFunction = async (data: any) => {
    setIsExecFunction(true);
    try {
      const result = await functionService.executeQuery(data); // Implemente este método no service se não existir
      setResultExecFunction(result);
    } catch (err) {
      // setError("Failed to add function");
      // console.error(err);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setResultExecFunction((err as any)?.response?.data)
    } finally {
      setIsExecFunction(false)
    }
  };

  const handleAddSeller = async (Seller: Partial<ISeller>) => {
    try {
      await sellerService.createSeller(Seller); // Implemente este método no service se não existir
      await fetchSellers();
    } catch (err) {
      setError("Failed to add Seller");
      console.error(err);
    }
  };

  const handleEditClient = async (id: number, client: Partial<IClient>) => {
    try {
      await clientService.updateClient(id, client);
      await fetchClients();
    } catch (err) {
      setError("Failed to edit client");
      console.error(err);
    }
  };

  const handleEditFunction = async (id: number, functionData: Partial<IFunction>) => {
    try {
      await functionService.updateFunction(id, functionData);
      await fetchFunctions();
    } catch (err) {
      setError("Failed to edit function");
      console.error(err);
    }
  };

  const handleDeleteFunction = async (id: number) => {
    if (window.confirm("Você tem certeza que deseja deletar essa função?")) {
      try {
        await functionService.deleteFunction(id);
        await fetchFunctions();
      } catch (err) {
        setError("Failed to delete function");
        console.error(err);
      }
    }
  };

  const handleEditSeller = async (id: number, seller: Partial<ISeller>) => {
    try {
      await sellerService.updateSeller(id, seller);
      await fetchSellers();
    } catch (err) {
      setError("Failed to edit seller");
      console.error(err);
    }
  };

  const handleDeleteSeller = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      try {
        await sellerService.deleteSeller(id);
        await fetchSellers();
      } catch (err) {
        setError("Failed to delete client");
        console.error(err);
      }
    }
  };

  const handleEditContractSituation = async (data: IStatusCategory) => {
    try {
      await contractService.updateStatusContract(data.id, {
        categoria: data.categoria,
        status: data.status,
      });
      await fetchClients();
    } catch (err) {
      setError("Falha na edição da situação do contrato");
      console.error(err);
    }
  };

  const handleSignContract = async (id: number) => {
    try {
      await contractService.signContract(id);
      await fetchClients();
    } catch (err) {
      setError("Falha na edição da situação do contrato");
      console.error(err);
    }
  };

  const handleAcceptProposal = async (id: number) => {
    try {
      await contractService.acceptProposal(id);
      await fetchClients();
    } catch (err) {
      setError("Falha na aceitação da proposta");
      console.error(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        fetchClients,
        fetchSellers,
        clients,
        sellers,
        fetchDashboardData,
        dashboardClients,
        handleDeleteClient,
        handleAddClient,
        handleAddSeller,
        error,
        setError,
        handleEditClient,
        handleEditSeller,
        handleDeleteSeller,
        fetchUsers,
        handleAddUser,
        handleDeleteUser,
        handleEditUser,
        users,
        handleEditContractSituation,
        handleSignContract,
        handleAcceptProposal,
        totalDoctors,
        fetchFunctions,
        functions,
        handleEditFunction,
        handleDeleteFunction,
        handleAddFunction,
        handleExecuteFunction,
        resultExecFunction,
        isExecFunction,
        setResultExecFunction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
