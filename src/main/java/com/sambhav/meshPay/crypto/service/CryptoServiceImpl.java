package com.sambhav.meshPay.crypto.service;

import com.sambhav.meshPay.crypto.aes.AESUtil;
import com.sambhav.meshPay.crypto.hashing.HashUtil;
import com.sambhav.meshPay.crypto.rsa.RSAUtil;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.KeyPair;
import java.security.PrivateKey;
import java.security.PublicKey;

@Service
@RequiredArgsConstructor
public class CryptoServiceImpl implements CryptoService {

    @Override
    public String encrypt(String plainText) {

        SecretKey key = AESUtil.generateKey();

        return AESUtil.encrypt(plainText, key);
    }

    @Override
    public String decrypt(String cipherText) {

        throw new UnsupportedOperationException(
                "Will implement after key exchange");
    }

    @Override
    public String sign(String message) {

        KeyPair keyPair = RSAUtil.generateKeyPair();

        PrivateKey privateKey = keyPair.getPrivate();

        String hash = HashUtil.sha256(message);

        return RSAUtil.sign(hash, privateKey);

    }

    @Override
    public boolean verify(String message,
                          String signature) {

        KeyPair keyPair = RSAUtil.generateKeyPair();

        PublicKey publicKey = keyPair.getPublic();

        String hash = HashUtil.sha256(message);

        return RSAUtil.verify(hash,
                signature,
                publicKey);

    }

}