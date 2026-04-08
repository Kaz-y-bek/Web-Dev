from django.shortcuts import get_object_or_404
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Category, Product
from api.serializers import CategorySerializer, ProductSerializer


class ProductListAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'


class CategoryListAPIView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'


class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        category = get_object_or_404(Category, id=category_id)
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


products_list = ProductListAPIView.as_view()
product_detail = ProductDetailAPIView.as_view()
category_list = CategoryListAPIView.as_view()
category_detail = CategoryDetailAPIView.as_view()
category_products = CategoryProductsAPIView.as_view()
