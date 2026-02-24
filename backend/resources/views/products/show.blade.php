@extends('main')

@section('content')
    <a href="{{ route('products.index') }}">Back To Shop</a>

    <h1>{{ $product['title'] }}</h1>
    <p>Price: {{ $product['price'] }} ₴</p>
    <p>Rate: {{ $product['rating'] }}</p>
@endsection
