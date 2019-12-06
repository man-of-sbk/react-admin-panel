/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return <Link to="/admin">admin</Link>;
}
