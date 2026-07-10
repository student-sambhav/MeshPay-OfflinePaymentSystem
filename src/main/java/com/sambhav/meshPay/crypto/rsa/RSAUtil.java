package com.sambhav.meshPay.crypto.rsa;

import java.nio.charset.StandardCharsets;
import java.security.*;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;

public class RSAUtil {

    private RSAUtil() {
    }

    /**
     * Generate a 2048-bit RSA Key Pair
     */
    public static KeyPair generateKeyPair() {
        try {
            KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
            generator.initialize(2048);
            return generator.generateKeyPair();
        } catch (Exception e) {
            throw new RuntimeException("Failed to generate RSA Key Pair", e);
        }
    }

    /**
     * Convert Public/Private key to Base64 String
     */
    public static String encodeKey(Key key) {
        return Base64.getEncoder().encodeToString(key.getEncoded());
    }

    /**
     * Convert Base64 String back to PublicKey
     */
    public static PublicKey decodePublicKey(String publicKey) {
        try {

            byte[] keyBytes = Base64.getDecoder().decode(publicKey);

            X509EncodedKeySpec spec =
                    new X509EncodedKeySpec(keyBytes);

            KeyFactory keyFactory =
                    KeyFactory.getInstance("RSA");

            return keyFactory.generatePublic(spec);

        } catch (Exception e) {
            throw new RuntimeException("Failed to decode public key", e);
        }
    }

    /**
     * Convert Base64 String back to PrivateKey
     */
    public static PrivateKey decodePrivateKey(String privateKey) {
        try {

            byte[] keyBytes = Base64.getDecoder().decode(privateKey);

            PKCS8EncodedKeySpec spec =
                    new PKCS8EncodedKeySpec(keyBytes);

            KeyFactory keyFactory =
                    KeyFactory.getInstance("RSA");

            return keyFactory.generatePrivate(spec);

        } catch (Exception e) {
            throw new RuntimeException("Failed to decode private key", e);
        }
    }

    /**
     * Sign a message using RSA SHA-256
     */
    public static String sign(String message, PrivateKey privateKey) {

        try {

            Signature signature =
                    Signature.getInstance("SHA256withRSA");

            signature.initSign(privateKey);

            signature.update(message.getBytes(StandardCharsets.UTF_8));

            byte[] signedBytes = signature.sign();

            return Base64.getEncoder().encodeToString(signedBytes);

        } catch (Exception e) {

            throw new RuntimeException("Failed to sign message", e);

        }

    }

    /**
     * Verify RSA Signature
     */
    public static boolean verify(String message,
                                 String signatureValue,
                                 PublicKey publicKey) {

        try {

            Signature signature =
                    Signature.getInstance("SHA256withRSA");

            signature.initVerify(publicKey);

            signature.update(message.getBytes(StandardCharsets.UTF_8));

            byte[] signatureBytes =
                    Base64.getDecoder().decode(signatureValue);

            return signature.verify(signatureBytes);

        } catch (Exception e) {

            throw new RuntimeException("Failed to verify signature", e);

        }

    }

}