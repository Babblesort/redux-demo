import React from 'react';
import { connect } from 'react-redux';
import AddCatalogItem from './AddCatalogItem';
import OrderableItems from './OrderableItems';
import { addItem } from '../actions/catalog-actions';

const Catalog = ({ items, addItem, headerText }) => {
  return (
    <div>
      <h2>{headerText}</h2>
      <AddCatalogItem onAddItem={addItem} />
      <OrderableItems items={items} />
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.catalogItems
});

const mapDispatchToProps = { addItem: addItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Catalog);
