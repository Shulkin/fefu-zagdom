<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

abstract class BaseSeeder extends Seeder
{
    /** @var \Faker\Generator */
    public $faker;

    public function __construct()
    {
        $this->faker = Factory::create('ru_RU');
    }
}
