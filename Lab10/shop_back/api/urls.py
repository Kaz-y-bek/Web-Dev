from django.urls import path

from .views import category_detail, category_list, category_products, product_detail, products_list

urlpatterns = [
    path('products/', products_list, name='products-list'),
    path('products/<int:product_id>/', product_detail, name='product-detail'),
    path('categories/', category_list, name='categories-list'),
    path('categories/<int:category_id>/', category_detail, name='category-detail'),
    path('categories/<int:category_id>/products/', category_products, name='category-products'),
]
