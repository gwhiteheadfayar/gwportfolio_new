// src/layouts/ShopfrontLayout.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ShopContainer,
    ShopHeader,
    NavControls,
    SearchInput,
    CartButton,
    CartCount,
    CollectionsNav,
    CollectionButton,
    ProductGrid,
    ProductCard,
    ProductImage,
    ProductInfo,
    ProductTitle,
    ProductPrice,
    ProductModal,
    ModalContent,
    ModalImage,
    ModalDetails,
    ModalActions,
    AddToCartButton,
    CloseButton,
    SizeSelector,
    CartModal,
    CartItem,
    CartItemImage,
    CartItemDetails,
    EmptyCart
} from "./ShopfrontLayout.styles";

// Sample product images (replace with your own)
const PRODUCT_IMAGES = {
    about: "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    experience: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    projects: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    contact: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    default: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
};

const ShopfrontLayout = ({ siteData }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeCollection, setActiveCollection] = useState("about");
    const [searchQuery, setSearchQuery] = useState("");
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");

    // Collections data
    const collections = {
        about: [
            {
                id: "about",
                title: "About Me",
                price: "Personal Details",
                description: siteData.aboutMeContent.introduction,
                content: (
                    <>
                        <p>{siteData.aboutMeContent.passion}</p>
                        <p>{siteData.aboutMeContent.careerGoals}</p>
                        <h4>Skills:</h4>
                        <ul>
                            {siteData.skills.map(skill => (
                                <li key={skill.name}>{skill.name}</li>
                            ))}
                        </ul>
                    </>
                ),
                image: PRODUCT_IMAGES.about,
                sizes: ["S", "M", "L"]
            }
        ],
        experience: [
            {
                id: "experience",
                title: "Work Experience",
                price: "Professional History",
                description: "My professional journey through various companies",
                content: (
                    <ul>
                        {siteData.experiences.map(exp => (
                            <li key={exp.company}>
                                <h4>{exp.company}</h4>
                                <p>{exp.duration}</p>
                                <p>{exp.description}</p>
                            </li>
                        ))}
                    </ul>
                ),
                image: PRODUCT_IMAGES.experience,
                sizes: ["S", "M", "L"]
            }
        ],
        projects: siteData.projects.map(project => ({
            id: project.name.toLowerCase().replace(/\s+/g, '-'),
            title: project.name,
            price: "View Project",
            description: project.description,
            content: (
                <>
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </>
            ),
            image: PRODUCT_IMAGES.projects,
            sizes: ["S", "M", "L"],
            url: project.url
        })),
        contact: [
            {
                id: "contact",
                title: "Contact",
                price: "Get In Touch",
                description: "Ways to connect with me",
                content: (
                    <ul>
                        {siteData.socialLinks.map(link => (
                            <li key={link.name}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li>Email: {siteData.personalInfo.email}</li>
                    </ul>
                ),
                image: PRODUCT_IMAGES.contact,
                sizes: ["S", "M", "L"]
            }
        ]
    };

    // Filter products based on search query
    const filteredProducts = collections[activeCollection].filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addToCart = () => {
        if (!selectedSize) return;

        const cartItem = {
            ...selectedProduct,
            size: selectedSize,
            quantity: 1,
            id: `${selectedProduct.id}-${selectedSize}`
        };

        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === cartItem.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === cartItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, cartItem];
        });

        setSelectedProduct(null);
        setSelectedSize("");
    };

    const removeFromCart = (itemId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(itemId);
            return;
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    return (
        <ShopContainer>
            <ShopHeader>
                <h1 style={{ fontStyle: "italic" }}>Garrett &Whitehead</h1>
                <NavControls>
                    <SearchInput
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <CartButton onClick={() => setShowCart(true)}>
                        🛒
                        {cart.length > 0 && <CartCount>{cart.reduce((total, item) => total + item.quantity, 0)}</CartCount>}
                    </CartButton>
                </NavControls>
            </ShopHeader>

            <CollectionsNav>
                <CollectionButton
                    $active={activeCollection === "about"}
                    onClick={() => setActiveCollection("about")}
                >
                    About
                </CollectionButton>
                <CollectionButton
                    $active={activeCollection === "experience"}
                    onClick={() => setActiveCollection("experience")}
                >
                    Experience
                </CollectionButton>
                <CollectionButton
                    $active={activeCollection === "projects"}
                    onClick={() => setActiveCollection("projects")}
                >
                    Projects
                </CollectionButton>
                <CollectionButton
                    $active={activeCollection === "contact"}
                    onClick={() => setActiveCollection("contact")}
                >
                    Contact
                </CollectionButton>
            </CollectionsNav>

            <ProductGrid
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        layoutId={`product-${product.id}`}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedProduct(product)}
                    >
                        <ProductImage>
                            <img src={product.image} alt={product.title} />
                        </ProductImage>
                        <ProductInfo>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductPrice>{product.price}</ProductPrice>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductGrid>

            <AnimatePresence>
                {selectedProduct && (
                    <ProductModal
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProduct(null)}
                    >
                        <ModalContent
                            layoutId={`product-${selectedProduct.id}`}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <ModalImage>
                                <img src={selectedProduct.image} alt={selectedProduct.title} />
                            </ModalImage>
                            <ModalDetails>
                                <h2>{selectedProduct.title}</h2>
                                <p>{selectedProduct.description}</p>
                                <div>{selectedProduct.content}</div>

                                {selectedProduct.sizes && (
                                    <SizeSelector>
                                        <label>Size:</label>
                                        <select
                                            value={selectedSize}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                        >
                                            <option value="">Select size</option>
                                            {selectedProduct.sizes.map(size => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </SizeSelector>
                                )}

                                <ModalActions>
                                    <AddToCartButton
                                        onClick={addToCart}
                                        disabled={!selectedSize}
                                    >
                                        Add to Cart
                                    </AddToCartButton>
                                </ModalActions>
                            </ModalDetails>
                            <CloseButton onClick={() => setSelectedProduct(null)}>×</CloseButton>
                        </ModalContent>
                    </ProductModal>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showCart && (
                    <CartModal
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25 }}
                    >
                        <h2>Your Portfolio Cart</h2>
                        {cart.length === 0 ? (
                            <EmptyCart>Your cart is empty</EmptyCart>
                        ) : (
                            <>
                                {cart.map(item => (
                                    <CartItem key={item.id}>
                                        <CartItemImage>
                                            <img src={item.image} alt={item.title} />
                                        </CartItemImage>
                                        <CartItemDetails>
                                            <h4>{item.title}</h4>
                                            <p>Size: {item.size}</p>
                                            <div>
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                            </div>
                                        </CartItemDetails>
                                    </CartItem>
                                ))}
                            </>
                        )}
                        <button onClick={() => setShowCart(false)}>Close</button>
                    </CartModal>
                )}
            </AnimatePresence>
        </ShopContainer>
    );
};

export default ShopfrontLayout;