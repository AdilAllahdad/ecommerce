import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            axios.get('/cart', { headers: { Authorization: token } })
                .then(res => setCart(res.data))
                .catch(() => localStorage.removeItem('authToken'));
        }
    }, []);

    const login = async (email, password) => {
        const { data } = await axios.post('/auth/login', { email, password });
        localStorage.setItem('authToken', data.token);
        setUser({ id: data.userId, name: data.name });
    };

    const addToCart = async (product) => {
        const token = localStorage.getItem('authToken');
        if (!token) return alert("Please log in first.");

        const { data } = await axios.post('/cart/add', product, {
            headers: { Authorization: token }
        });
        setCart(data.cart);
    };

    return (
        <AuthContext.Provider value={{ user, login, cart, addToCart }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
