import LoginTemplate from '@/components/templates/LoginTemplate';
import { Metadata } from 'next';
import React, { FC } from 'react';

export const metadata: Metadata = {
    title: 'Orbit alliance | Login',
    description: 'Login page for Orbit alliance',
};


const login: FC = () => <LoginTemplate />;

export default login;