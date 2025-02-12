'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Motion = motion.div;

export function change() {
    const [opn, setopn] = useState(false)

    function change() {
        setopn(!opn)
    }
    return opn;
}