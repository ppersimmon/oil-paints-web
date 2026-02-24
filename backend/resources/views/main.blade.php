<!DOCTYPE html>
<html>
<head>
    <title>App</title>
</head>
<body>
<nav>
    <a href="{{ route('products.index') }}">Products</a> |
    <a href="{{ route('contact.create') }}">Contact Us</a>
</nav>
<hr>

@yield('content')
</body>
</html>
