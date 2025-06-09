// src/layouts/ShopfrontLayout.styles.js
import styled from "styled-components";
import { motion } from "framer-motion";

export const ShopContainer = styled.div`
  background-color: #f8f8f8;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
`;

export const ShopHeader = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  font-family: "Baskervville", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  line-height: 1rem;
`;

export const NavControls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end; /* Change to flex-end to right align */
`;

export const SearchContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;
  position: relative;
`;

export const SearchInput = styled(motion.input)`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 2rem;
  min-width: 200px;
  margin-left: 0.5rem;
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 0.8rem;
  line-height: 1rem;
  text-align: center;
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  font-size: 1.2rem;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #333;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
`;

export const CollectionsNav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e5e5;
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
  font-family: "Baskervville", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  line-height: 1rem;
`;

export const CollectionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: ${props => props.$active ? '600' : '400'};
  font-family: "Baskervville", serif;
  font-style: normal;
  font-optical-sizing: auto;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.$active ? '100%' : '0'};
    height: 2px;
    background: #333;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

export const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem; 
  padding: 1rem; 
`;

export const ProductCard = styled(motion.div)`
  background: white;
  /* box-shadow: 0 2px 10px rgba(0,0,0,0.1); */
  /* border-radius: 8px; */
  overflow: hidden;
  cursor: pointer;
  
  /* &:hover { transform: translateY(-5px); } */
`;

export const ProductImage = styled.div`
  height: 250px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* box-shadow: 0 2px 10px rgba(0,0,0,0.1); */
    /* border-radius: 8px; */
  }
`;

export const LogoImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
  margin: 0 auto;
`;

export const ProductInfo = styled.div`
  padding: 0.5rem; 
  font-family: "Inter", sans-serif;
`;

export const ProductTitle = styled.h3`
  margin: 0.8rem 0 0.1rem 0;
  font-size: 1rem;
  font-family: "Inter", sans-serif;
`;

export const ProductPrice = styled.p`
  margin: 0 0 0 0;
  color: #666;
  font-weight: 400;
  font-family: "Inter", sans-serif;
`;

export const ProductModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled(motion.div)`
  background: white;
  width: 80%;
  max-width: 800px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  max-height: 80vh;
`;

export const ModalImage = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ModalDetails = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const AddToCartButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
`;

export const SizeSelector = styled.div`
  margin: 1rem 0;
  
  select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
  }
`;

export const CartModal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 10px rgba(0,0,0,0.1);
  z-index: 1001;
  padding: 1.5rem;
  overflow-y: auto;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`;

export const CartItemImage = styled.div`
  width: 60px;
  height: 60px;
  background: #f5f5f5;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CartItemDetails = styled.div`
  flex: 1;
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: #666;
  padding: 2rem 0;
`;