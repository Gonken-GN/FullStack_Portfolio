import React, { useState, useEffect } from "react";

import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap,MotionWrap } from "../../Wrapper";
import { urlFor, client } from "../../client";

import './Testimonials.scss';
const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState([]);

  return (
    <div>Testimonials</div>
  )
}

export default Testimonials;