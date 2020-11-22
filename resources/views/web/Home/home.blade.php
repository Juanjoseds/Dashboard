@extends('layouts/master')

@section('title', 'Dashboard Pro')

@section('styles')
    <link rel="stylesheet" href="{{asset('css/pages/Home/header.css')}}">
@endsection

@section('content')
    @include('partials/Home/header')
@endsection
