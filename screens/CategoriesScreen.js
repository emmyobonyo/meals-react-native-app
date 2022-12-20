import React from 'react'
import { FlatList } from 'react-native' // to ensure that only the important stuff are loaded
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'

// Creating a Grid in React Native

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
    />
  )
}
function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2} // Render these items into two columns
    />
  )
}

export default CategoriesScreen
