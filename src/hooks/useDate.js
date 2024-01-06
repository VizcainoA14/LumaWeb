import { useContext } from 'react'
import { DateContext } from '@/context/DateContext'

export const useDate = () => {
    const { date, setDate } = useContext(DateContext);
    return { date, setDate }
}
