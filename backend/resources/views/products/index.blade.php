@extends('main')

@section('content')
    <h1>Shop</h1>

    <ul>
        @foreach($products as $product)
            <li>
                <strong>{{ $product['title'] }}</strong> — {{ $product['price'] }} ₴
                <a href="{{ route('products.show', $product['id']) }}">[Show More]</a>
            </li>
        @endforeach
    </ul>
@endsection
