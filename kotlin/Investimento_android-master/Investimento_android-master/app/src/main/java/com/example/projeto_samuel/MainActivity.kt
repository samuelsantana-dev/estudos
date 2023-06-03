package com.example.projeto_samuel

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
//import android.widget.Button
import android.widget.TextView


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

      /*  val menuInflater = menuInflater
        menuInflater.inflate(R.menu.menu, menu)*/


        //localiza o link e chama a funçao
        val curtoPrazoTextView = findViewById<TextView>(R.id.curtoPrazo)
        curtoPrazoTextView.setOnClickListener {
            paginaCurtoPrazo()
        }

        //localiza o link e chama a funçao
        val medioPrazoTextView = findViewById<TextView>(R.id.medioPrazo)
        medioPrazoTextView.setOnClickListener {
            paginaMedioPrazo()
        }

        //localiza o link e chama a funçao
        val longoPrazoTextView = findViewById<TextView>(R.id.longoPrazo)
        longoPrazoTextView.setOnClickListener {
            paginaLongPrazo()
        }

    }


    //Funçao para poder ir para outras paginas
    fun paginaCurtoPrazo() {
        intent = Intent(this, investimentosCurtoPrazo::class.java)
        startActivity(intent)
    }

    //Funçao para poder ir para outras paginas
     fun paginaMedioPrazo() {
         intent = Intent(this, investimentoMedioPrazo::class.java)
        startActivity(intent)
    }
    //Funçao para poder ir para outras paginas
     fun paginaLongPrazo() {
          intent = Intent(this, investimentoLongoPrazo::class.java)
        startActivity(intent)
    }

}


