import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import Product from './page/productFeature';
import Description from './page/description';
import ProductAdidas from './page/ProductAdidas';
import ProductBurberry from './page/ProductBurberry';
import ProductGucci from './page/ProductGucci';
import ProductDolce from './page/ProductDolce';
import ProductLacoste from './page/ProductLacote';
ProductFeatures.propTypes = {};

function ProductFeatures(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={Product} />

        <Route path={`${match.path}/mu-adidas`} component={ProductAdidas} />
        <Route path={`${match.path}/mu-burberry`} component={ProductBurberry} />
        <Route path={`${match.path}/mu-gucci`} component={ProductGucci} />
        <Route path={`${match.path}/mu-dolce`} component={ProductDolce} />
        <Route path={`${match.path}/mu-lacoste`} component={ProductLacoste} />
        <Route path={`${match.url}/:muId`} component={Description} />
      </Switch>
    </div>
  );
}

export default ProductFeatures;
