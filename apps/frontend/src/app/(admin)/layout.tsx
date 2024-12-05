import Pagina from '@/components/shared/Pagina';
import React from 'react';

interface layoutProps {
    children: React.ReactNode;
}

const layout = ({ children }: layoutProps) => {
    return <Pagina>{children}</Pagina>;
};

export default layout;
