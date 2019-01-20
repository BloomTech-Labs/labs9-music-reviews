import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const routes = {
  '/': 'Home',
  '/reviews': 'Reviews',
  '/billing': 'Billing',
  '/settings': 'Settings',
  '/signup': 'Signup',
  '/login': 'Login',
  '/forgot_password': 'Forgot Password'
};

const findRoute = url => routes[url];

const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr, index) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const BreadcrumbsItem = ({ match }) => {
  const routeName = findRoute(match.url);
  if (routeName) {
    return (
      match.isExact ?
      (
        <BreadcrumbItem active style ={{backgroundColor: '#343a40'}}>{routeName}</BreadcrumbItem>
      ) :
      (
        <BreadcrumbItem style ={{backgroundColor: '#343a40'}}>
          <Link to={match.url || ''}>
            {routeName}
          </Link>
        </BreadcrumbItem>
      )
    );
  }
  return null;
};

const Breadcrumbs = ({ location : { pathname }, match }) => {
  const paths = getPaths(pathname);
  return (
    <ol className = 'breadcrumb' style ={{backgroundColor: '#343a40', padding: '0'}}>
      {paths.map(path => <Route path={path} component={BreadcrumbsItem} />)}
    </ol>
  );
};
export default Breadcrumbs;
