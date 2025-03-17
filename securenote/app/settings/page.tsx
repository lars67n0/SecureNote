'use client';
import React from 'react'
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Note {
  id: number;
  title: string;
  content: string;
}

const SettingsPage = () => {
 
  return (
    <div>
       I am Settings
    </div>
  )
}

export default SettingsPage;