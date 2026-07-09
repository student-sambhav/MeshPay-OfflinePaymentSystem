package com.sambhav.meshPay.crypto.service;

public interface CryptoService {

    String encrypt(String plainText);

    String decrypt(String cipherText);

    String sign(String message);

    boolean verify(String message, String signature);

}