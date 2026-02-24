<?php

namespace App\Services;

use App\Repositories\Interfaces\ContactUsI;

class ContactUsService
{
    protected ContactUsI $contactUsI;

    public function __construct(ContactUsI $contactUsI)
    {
        $this->contactUsI = $contactUsI;
    }

    public function processContactUsForm(array $data): bool
    {
        return $this->contactUsI->store($data);
    }
}
