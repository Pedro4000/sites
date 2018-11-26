<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbcda0f5a5d56c65cb70589d1c192332e
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Stripe\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Stripe\\' => 
        array (
            0 => __DIR__ . '/..' . '/stripe/stripe-php/lib',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbcda0f5a5d56c65cb70589d1c192332e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbcda0f5a5d56c65cb70589d1c192332e::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
