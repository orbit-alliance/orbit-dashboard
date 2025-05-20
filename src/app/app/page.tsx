"use client";
import React from 'react';

// import { Container } from './styles';

function AppWrapper() {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) return <div>Invalid code</div>;
    localStorage.setItem('token42', code);
    location.href = '/app/wallet';
  return ;
}

export default AppWrapper;