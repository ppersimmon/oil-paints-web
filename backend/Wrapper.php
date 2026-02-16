<?php

class Wrapper
{
    public function get(string $key, string $default = ''): string
    {
        return isset($_GET[$key]) ? htmlspecialchars(trim($_GET[$key])) : $default;
    }

    public function post(string $key, string $default = ''): string
    {
        return isset($_POST[$key]) ? htmlspecialchars(trim($_POST[$key])) : $default;
    }
}