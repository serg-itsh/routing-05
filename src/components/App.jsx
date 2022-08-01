import { Route, Routes } from 'react-router-dom';
import { About } from '../Pages/About/About';
import { Home } from '../Pages/Home/Home';
import { Products } from '../Pages/Products/Products';
import { Mission } from './Mission';
import { Team } from './Team';
import { Reviews } from './Reviews';
import { ProductDetails } from '../Pages/ProductDetails/ProductDetails';
// import { NotFound } from '../Pages/NotFound/NotFound';
// import { Container, Header, Logo, Link } from './App.styled';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="sales" element={<Sales />} />
        <Route path="customers" element={<Customers />} />
      </Route> */}
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </Logo>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/products">Products</Link>
//         </nav>
//       </Header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<ProductDetails />} />

//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Container>
//   );
// };
