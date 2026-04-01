/**
 * 0ai Inc. お問い合わせフォーム — Google Apps Script Web App
 *
 * デプロイ手順:
 * 1. https://script.google.com で info@0ai-inc.com アカウントで新規プロジェクト作成
 * 2. このファイルの内容を貼り付け
 * 3. デプロイ → 新しいデプロイ → ウェブアプリ
 *    - 実行ユーザー: 自分 (info@0ai-inc.com)
 *    - アクセス: 全員
 * 4. デプロイ URL をコピーし、contact.astro の GAS_URL に設定
 */

var ADMIN_EMAIL = 'info@0ai-inc.com';

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var name = data.name || '';
    var email = data.email || '';
    var company = data.company || '';
    var category = data.category || '';
    var message = data.message || '';
    var lang = data.lang || 'ja';

    // 1. 管理者宛メール
    var adminSubject = '【0ai HP】お問い合わせ: ' + category + ' — ' + name;
    var adminBody = [
      '0ai ウェブサイトからお問い合わせがありました。',
      '',
      '━━━━━━━━━━━━━━━━━━',
      'お問い合わせ種別: ' + category,
      'お名前: ' + name,
      'メールアドレス: ' + email,
      '会社名: ' + (company || '(未入力)'),
      '━━━━━━━━━━━━━━━━━━',
      '',
      '【お問い合わせ内容】',
      message,
      '',
      '━━━━━━━━━━━━━━━━━━',
      '※ このメールは 0ai-inc.com のお問い合わせフォームから自動送信されています。',
      '送信者への自動返信メールは送信済みです。',
    ].join('\n');

    GmailApp.sendEmail(ADMIN_EMAIL, adminSubject, adminBody, {
      replyTo: email,
      name: '0ai お問い合わせフォーム',
    });

    // 2. 送信者宛 自動返信
    if (lang === 'en') {
      sendAutoReplyEN(name, email, company, category, message);
    } else {
      sendAutoReplyJA(name, email, company, category, message);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendAutoReplyJA(name, email, company, category, message) {
  var subject = '【0ai】お問い合わせを受け付けました';
  var body = [
    name + ' 様',
    '',
    'このたびはお問い合わせいただき、誠にありがとうございます。',
    '以下の内容でお問い合わせを受け付けいたしました。',
    '',
    '─────────────────────',
    'お問い合わせ種別: ' + category,
    '会社名: ' + (company || '(未入力)'),
    'お名前: ' + name,
    'メールアドレス: ' + email,
    '',
    '【お問い合わせ内容】',
    message,
    '─────────────────────',
    '',
    '担当者より2営業日以内にご連絡いたしますので、',
    '今しばらくお待ちくださいますようお願いいたします。',
    '',
    'なお、このメールは自動送信されております。',
    'このメールにご返信いただいても対応いたしかねますので、',
    '追加のご連絡は info@0ai-inc.com まで直接お送りください。',
    '',
    '━━━━━━━━━━━━━━━━━━',
    '株式会社0ai',
    '〒103-0022 東京都中央区日本橋室町1丁目11番12号',
    '日本橋水野ビル7階',
    'Email: info@0ai-inc.com',
    'Web: https://0ai-inc.com',
    '━━━━━━━━━━━━━━━━━━',
  ].join('\n');

  GmailApp.sendEmail(email, subject, body, {
    name: '株式会社0ai',
    noReply: true,
  });
}

function sendAutoReplyEN(name, email, company, category, message) {
  var subject = '[0ai] We have received your inquiry';
  var body = [
    'Dear ' + name + ',',
    '',
    'Thank you for contacting 0ai Inc.',
    'We have received your inquiry with the following details:',
    '',
    '─────────────────────',
    'Inquiry Type: ' + category,
    'Company: ' + (company || '(not provided)'),
    'Name: ' + name,
    'Email: ' + email,
    '',
    '[Message]',
    message,
    '─────────────────────',
    '',
    'A member of our team will get back to you within 2 business days.',
    'Thank you for your patience.',
    '',
    'Please note that this is an automated message.',
    'If you need to reach us directly, please email info@0ai-inc.com.',
    '',
    '━━━━━━━━━━━━━━━━━━',
    '0ai Inc.',
    'Nihonbashi Mizuno Building 7F',
    '1-11-12 Nihonbashi Muromachi, Chuo-ku',
    'Tokyo 103-0022, Japan',
    'Email: info@0ai-inc.com',
    'Web: https://0ai-inc.com',
    '━━━━━━━━━━━━━━━━━━',
  ].join('\n');

  GmailApp.sendEmail(email, subject, body, {
    name: '0ai Inc.',
    noReply: true,
  });
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', service: '0ai contact form' }))
    .setMimeType(ContentService.MimeType.JSON);
}
