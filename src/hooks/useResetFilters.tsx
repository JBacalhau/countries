// useResetFilters.tsx
import { useRouter } from 'next/navigation';

const useResetFilters = (resetFilters: () => void) => {
    const router = useRouter();

    const handleReset = () => {
        resetFilters();  // Chama a função para resetar os filtros
        router.push('/');  // Redireciona para a página inicial
    };

    return handleReset;
};

export default useResetFilters;
