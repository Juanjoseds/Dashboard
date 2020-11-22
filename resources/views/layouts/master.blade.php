<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @yield('styles')
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href = {{ asset("bootstrap/css/bootstrap.css") }} rel="stylesheet" />
</head>
<body>
    @yield('content')
    @yield('javascript')
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
