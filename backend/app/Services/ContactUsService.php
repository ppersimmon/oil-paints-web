<?php

namespace App\Services;

use App\Repository\ContactUsRepository;

class ContactUsService
{
    protected ContactUsRepository $contactUsRepository;

    public function __construct(ContactUsRepository $contactUsRepository)
    {
        $this->contactUsRepository = $contactUsRepository;
    }

    public function processContactUsForm(array $data): void
    {
        $this->contactUsRepository->create($data);
    }
}
