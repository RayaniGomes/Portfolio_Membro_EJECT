import { MembrosStore } from "@/interface";
import api from "@/service/api";
import { create } from "zustand";

export const useMembro = create<MembrosStore>((set) => ({
    membros: [],

    getMembros: async () => {
        await api.get('/employees')
            .then((response) => {
                set({
                    membros: response.data
                })
                console.log(response.data)
            })
    },
}));	