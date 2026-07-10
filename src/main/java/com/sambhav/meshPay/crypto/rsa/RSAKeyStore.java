package com.sambhav.meshPay.crypto.rsa;

import java.security.KeyPair;

public class RSAKeyStore {

    private RSAKeyStore() {}

    private static final KeyPair KEY_PAIR = RSAUtil.generateKeyPair();

    public static KeyPair getKeyPair() {
        return KEY_PAIR;
    }
}