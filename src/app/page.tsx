"use client";
import { useRouter } from 'next/navigation';
import React, { FC, useEffect } from 'react';

const app: FC = () => {
    const router = useRouter();
    useEffect(() => {
        router.push('/login');
    }, [router]);
  return <></>;
}

export default app;