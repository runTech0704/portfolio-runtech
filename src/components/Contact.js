import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // フォーム状態管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  // 入力変更ハンドラ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    // フォーム送信の模擬処理
    setTimeout(() => {
      // 実際のプロジェクトでは、ここでAPIリクエストを行います
      console.log('フォームデータを送信:', formData);
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });

      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // 成功メッセージを5秒後に消す
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 5000);
    }, 1500);
  };

  // 連絡先情報
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      type: 'Email',
      value: 'satoru.f.0704.job@gmail.com',
      link: 'mailto:satoru.f.0704.job@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      type: '所在地',
      value: '東京都',
      link: null,
    },
  ];

  // ソーシャルリンク
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/runTech0704',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://x.com/runrun071719842',
    },
  ];

  // アニメーション設定
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container-section">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title inline-block mx-auto">お問い合わせ</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-[800px] mx-auto mt-8">
            バックエンド開発、Python/Django、GCPの技術的なご相談や、プロジェクトのご依頼など、
            お気軽にお問い合わせください。できるだけ早くご返信いたします。
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* 連絡先情報 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:w-1/3"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">連絡先情報</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <div className="text-primary text-xl mt-1 mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold">{info.type}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">SNS</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      variants={itemVariants}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-primary transition-colors duration-300"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold mb-4">専門領域</h3>
                <motion.ul variants={itemVariants} className="list-disc pl-5 text-slate-600 dark:text-slate-400">
                  <li>Python/Django バックエンド開発</li>
                  <li>GCPを使用したクラウドネイティブ開発</li>
                  <li>データベース設計と最適化</li>
                  <li>スケーラブルなシステムアーキテクチャ</li>
                  <li>API設計とマイクロサービス開発</li>
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* お問い合わせフォーム */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="md:w-2/3"
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">メッセージを送る</h3>

              {formStatus.isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-md">
                  メッセージを送信しました。ありがとうございます！
                </div>
              )}

              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-md">
                  エラーが発生しました: {formStatus.error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      お名前
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      メールアドレス
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="subject" className="block mb-2 font-medium">
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium">
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="input-field resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants} className="text-right">
                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
